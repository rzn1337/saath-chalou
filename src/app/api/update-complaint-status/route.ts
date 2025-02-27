import { getTokenData } from "@/app/helpers/getTokenData";
import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    try {
        const body = await request.json();
        const { complaintID, status, adminNote } = body;

        console.log(body);

        const updatedComplaint = await prisma.complaint.update({
            where: { id: complaintID },
            data: { status, adminNote },
        });

        if (!updatedComplaint) {
            return NextResponse.json(
                {
                    message: "Error updating complaint status",
                    success: false,
                },
                {
                    status: 500,
                }
            );
        }

        return NextResponse.json(
            {
                message: "Complaint status updated created successfully",
                data: updatedComplaint,
                success: true,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}
