  import { connectToDatabase } from "@/lib/mongo";
  
  export async function GET(request: Request) {
    const { db } = await connectToDatabase();
    try {
      const test = await db.collection("test").find({}).toArray();
      return new Response(JSON.stringify(test));
    } catch (error) {
      return new Response("error");
    }
  }
  