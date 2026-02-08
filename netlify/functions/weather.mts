import type { Context } from "@netlify/functions";

const API_KEY = process.env.WEATHER_API_KEY;

export default async (req: Request, context: Context) => {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city");
  const response = await fetch(`https://a`);
  const data = await response.json();
  return new Response(JSON.stringify(data));
}