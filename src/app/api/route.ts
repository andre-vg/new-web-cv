import { NextRequest, NextResponse } from 'next/server';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { template } from '@/lib/templateAI';

async function main(question: string) {
  const prompt = ChatPromptTemplate.fromTemplate(template);
  const llm = new ChatGoogleGenerativeAI({
    apiKey: process.env.GEMINI_API_KEY,
    // maxOutputTokens: 200,
    modelName: 'gemini-1.5-flash-latest',
  });
  const chain = prompt.pipe(llm);

  const response = await chain.invoke({
    question,
  });

  return response;
}

export async function POST(payload: Request) {
  const body = await payload.json();
  const response = await main(body.question);

  return NextResponse.json({
    content: response.content,
    metadata: response.usage_metadata,
  });
}
