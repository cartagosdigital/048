import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData()
    const file = form.get('file') as File
    const name = form.get('name') as string

    if (!file || !name) {
      return NextResponse.json({ error: 'Missing file or name' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const publicDir = join(process.cwd(), 'public', 'images')
    const filePath = join(publicDir, `${name}.jpg`)

    await writeFile(filePath, buffer)

    return NextResponse.json({ ok: true, path: `/images/${name}.jpg` })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
