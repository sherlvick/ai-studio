import { apiClient } from './client';
import axios from 'axios';
import type { GenerationRequest, GenerationResult, GenerationError } from '../types/generation';

/**
 * Sends an image generation request to the API
 * @param request Generation request parameters
 * @returns Promise with generation result or error
 */
export async function generateImage(
  request: GenerationRequest,
  signal?: AbortSignal
): Promise<GenerationResult | GenerationError> {
  try {
    const response = await apiClient.post<GenerationResult>('/generate', request, {
      signal,
      // Simulating API delay and random errors as per requirements
      validateStatus: (status: number) => status >= 200 && status < 300,
    });

    // Simulate 20% error rate
    if (Math.random() < 0.2) {
      throw new Error('Model overloaded');
    }

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        message: error.message || 'An error occurred during generation',
      };
    }
    return {
      message: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}
