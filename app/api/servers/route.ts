import { profile } from "console";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
  try {
    if (!profile) {
      return new NextResponse("unauthorized", { status: 401 });
    }
  } catch (error) {
    console.log("[SERVER_POST]", error);
    return new NextResponse("internal Error", { status: 500 });
  }
}
