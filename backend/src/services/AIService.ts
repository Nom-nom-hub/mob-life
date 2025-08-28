import axios from 'axios';

export interface AIMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface AIProvider {
  name: string;
  apiUrl: string;
  apiKey: string;
  model: string;
  maxTokens: number;
  temperature: number;
  getRequestBody(messages: AIMessage[]): any;
  parseResponse(response: any): string;
}

export class OllamaProvider implements AIProvider {
  name = 'Ollama';
  apiUrl: string;
  apiKey = '';
  model: string;
  maxTokens = 1000;
  temperature = 0.7;

  constructor(apiUrl = 'http://localhost:11434', model = 'llama2') {
    this.apiUrl = apiUrl;
    this.model = model;
  }

  getRequestBody(messages: AIMessage[]): any {
    return {
      model: this.model,
      messages: messages,
      stream: false,
      options: {
        temperature: this.temperature,
        num_predict: this.maxTokens
      }
    };
  }

  parseResponse(response: any): string {
    return response.response || response.choices?.[0]?.message?.content || 'No response';
  }
}

export class GeminiProvider implements AIProvider {
  name = 'Gemini';
  apiUrl = 'https://generativelanguage.googleapis.com/v1beta';
  apiKey: string;
  model = 'gemini-pro';
  maxTokens = 2048;
  temperature = 0.9;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  getRequestBody(messages: AIMessage[]): any {
    // Convert to Gemini format
    const prompt = messages.map(msg => `${msg.role}: ${msg.content}`).join('\n\n');
    return {
      contents: [{
        parts: [{
          text: prompt
        }]
      }],
      generationConfig: {
        temperature: this.temperature,
        maxOutputTokens: this.maxTokens,
      }
    };
  }

  parseResponse(response: any): string {
    return response.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';
  }
}

export class OpenAIProvider implements AIProvider {
  name = 'OpenAI';
  apiUrl = 'https://api.openai.com/v1';
  apiKey: string;
  model = 'gpt-3.5-turbo';
  maxTokens = 1000;
  temperature = 0.7;

  constructor(apiKey: string, model = 'gpt-3.5-turbo') {
    this.apiKey = apiKey;
    this.model = model;
  }

  getRequestBody(messages: AIMessage[]): any {
    return {
      model: this.model,
      messages: messages,
      max_tokens: this.maxTokens,
      temperature: this.temperature
    };
  }

  parseResponse(response: any): string {
    return response.choices?.[0]?.message?.content || 'No response';
  }
}

export class AIService {
  private providers: Map<string, AIProvider> = new Map();

  constructor() {
    this.initializeProviders();
  }

  private initializeProviders() {
    // Add Ollama for development (assuming it's running locally)
    this.providers.set('ollama', new OllamaProvider());

    // Add Gemini and OpenAI if keys are provided
    const geminiKey = process.env.GEMINI_API_KEY;
    const openaiKey = process.env.OPENAI_API_KEY;

    if (geminiKey) {
      this.providers.set('gemini', new GeminiProvider(geminiKey));
    }

    if (openaiKey) {
      this.providers.set('openai', new OpenAIProvider(openaiKey));
    }
  }

  async generateResponse(
    messages: AIMessage[],
    providerName: string = this.getBestProvider()
  ): Promise<string> {
    const provider = this.providers.get(providerName);
    if (!provider) {
      throw new Error(`AI provider '${providerName}' not found or not configured`);
    }

    try {
      const response = await axios.post(
        `${provider.apiUrl}/chat/completions`,
        provider.getRequestBody(messages),
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': provider.apiKey ? `Bearer ${provider.apiKey}` : undefined
          }
        }
      );

      return provider.parseResponse(response.data);
    } catch (error) {
      console.error(`AI Service Error (${provider.name}):`, error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      throw new Error(`Failed to generate AI response: ${errorMessage}`);
    }
  }

  private getBestProvider(): string {
    // In development, prefer Ollama (free)
    if (this.providers.has('ollama')) {
      return 'ollama';
    }

    // In production, prefer Gemini (cost-effective)
    if (this.providers.has('gemini')) {
      return 'gemini';
    }

    // Fallback to OpenAI
    if (this.providers.has('openai')) {
      return 'openai';
    }

    throw new Error('No AI providers configured');
  }

  // Mafia-specific AI helpers
  async generateCrimeStory(action: string, playerName: string): Promise<string> {
    const messages: AIMessage[] = [
      {
        role: 'system',
        content: 'You are a gritty mafia game narrator. Respond with brief, dramatic descriptions of criminal activities without being explicit.'
      },
      {
        role: 'user',
        content: `${playerName} is attempting ${action}. Generate a short, immersive description of what happens.`
      }
    ];

    return this.generateResponse(messages);
  }

  async generateNpcResponse(name: string, faction: string, situation: string): Promise<string> {
    const messages: AIMessage[] = [
      {
        role: 'system',
        content: `You are ${name}, a ${faction} NPC in a mafia game. Respond in character with brief dialogue.`
      },
      {
        role: 'user',
        content: situation
      }
    ];

    return this.generateResponse(messages);
  }

  // Get available providers for frontend
  getAvailableProviders(): string[] {
    return Array.from(this.providers.keys());
  }

  // Switch to specific provider
  setProvider(name: string): void {
    if (!this.providers.has(name)) {
      throw new Error(`Provider '${name}' not available`);
    }
  }
}

// Export singleton instance
export const aiService = new AIService();