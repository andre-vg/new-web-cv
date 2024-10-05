import { NextRequest, NextResponse } from 'next/server';
import captureWebsite from 'capture-website';
import { Projeto } from '@/types';

export async function POST(payload: Request) {
  const { content } = await payload.json();
  

  const URLS = content.map((domain: Projeto) => {
    return {
      id: domain.id,
      url: domain.homepage ?? domain.html_url,
    };
  });

  let imagesArr: any = [];

  // Create an array of promises
  const capturePromises = URLS.map(async (domain: any) => {
    const { id, url } = domain;
    const image = await captureWebsite.base64(
      url,
      //   {
      //   width: 1280,
      //   height: 720,
      //   quality: 0.5,
      //   delay: 5,
      // }
    );
    return { id, image };
  });

  // Wait for all promises to resolve
  const results = await Promise.all(capturePromises);

  // Filter out any rejected promises if necessary
  imagesArr = results.filter((result) => result !== undefined);

  return NextResponse.json({
    images: imagesArr,
  });
}
