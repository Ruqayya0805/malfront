import { NextRequest, NextResponse } from "next/server";

const PROCESSING_SERVER_URL =
  "http://127.0.0.1:5000/virustotal";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Forward the file to the external processing server
    const externalFormData = new FormData();
    externalFormData.append("file", file);

    const response = await fetch(PROCESSING_SERVER_URL, {
      method: "POST",
      body: externalFormData,
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Processing failed" }, { status: 500 });
    }

    const data = await response.json(); // Expect JSON response with two text fields
    console.log(data.analysis_report);
    return NextResponse.json(data.analysis_report);
  } catch (error) {
    console.error("Error processing file:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}