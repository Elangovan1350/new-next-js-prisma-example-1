import { prisma } from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  // or parseInt(params.id)
  const id3 = Number(id);

  const deletedUser = await prisma.user.delete({
    where: {
      id: id3,
    },
  });

  return NextResponse.json(
    {
      message: "DELETE user",
      user: deletedUser,
    },
    { status: 200 }
  );
};
