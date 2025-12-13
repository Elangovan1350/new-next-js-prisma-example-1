import { prisma } from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
export const GET = async () => {
  const users = await prisma.user.findMany();
  // Logic to handle GET request for users
  return NextResponse.json(
    { message: "GET users", users },
    {
      status: 200,
    }
  );
};

export const POST = async (req: NextRequest) => {
  const { name, email } = await req.json();
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  // Logic to handle POST request to create a new user
  return NextResponse.json(
    { message: "POST user", user: newUser },
    {
      status: 201,
    }
  );
};
