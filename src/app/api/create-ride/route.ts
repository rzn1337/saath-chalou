// import { getTokenData } from "@/app/helpers/getTokenData";
// import prisma from "@/app/lib/prisma";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(request: NextRequest) {
//     try {
//         const body = await request.json();
//         const { make, model, year, licensePlate, seats } = body;

//         const userID = (await getTokenData(request)) as string;

//         const ride = await prisma.ride.create({
//             data: {
                
//             },
//         });

//         const response = NextResponse.json({
//             message: "Vehicle registered successfully",
//             data: vehicle,
//             success: true,
//         });

//         return response;
//     } catch (error) {
//         return Response.json({ error: error.message }, { status: 500 });
//     }
// }
