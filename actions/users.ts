"use server"

import db from "@/lib/db"

export async function GetAllUsers() {
    const users = await db.users.findMany()

    return users
}