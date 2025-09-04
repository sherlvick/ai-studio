/**
 * Available style options for image generation
 */
export type Style = 'editorial' | 'streetwear' | 'vintage';

/**
 * Request payload for image generation
 */
export interface GenerationRequest {
  imageDataUrl: string;
  prompt: string;
  style: Style;
}

/**
 * Response from the generation API
 */
export interface GenerationResult {
  id: string;
  imageUrl: string;
  prompt: string;
  style: Style;
  createdAt: string;
}

/**
 * Error response from the generation API
 */
export interface GenerationError {
  message: string;
}

/**
 * Type guard to check if response is a GenerationError
 */
export function isGenerationError(
  response: GenerationResult | GenerationError
): response is GenerationError {
  return 'message' in response;
}
