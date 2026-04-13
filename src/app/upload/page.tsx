'use client'

import { useState, useRef, useCallback } from 'react'

const SLOTS = [
  { key: 'logo', label: 'Logo oficial do site', folder: 'images' },
  { key: 'antes-1', label: 'Sofá — ANTES (sujo)', folder: 'images' },
  { key: 'depois-1', label: 'Sofá — DEPOIS (limpo)', folder: 'images' },
  { key: 'antes-2', label: 'Poltrona — ANTES (suja)', folder: 'images' },
  { key: 'depois-2', label: 'Poltrona — DEPOIS (limpa)', folder: 'images' },
]

function ImageSlot({ slotKey, label }: { slotKey: string; label: string }) {
  const [preview, setPreview] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'uploading' | 'done' | 'error'>('idle')
  const inputRef = useRef<HTMLInputElement>(null)

  const upload = useCallback(async (file: File) => {
    setStatus('uploading')
    const form = new FormData()
    form.append('file', file)
    form.append('name', slotKey)
    const res = await fetch('/api/upload', { method: 'POST', body: form })
    if (res.ok) {
      setStatus('done')
    } else {
      setStatus('error')
    }
  }, [slotKey])

  const onFile = useCallback((file: File) => {
    const url = URL.createObjectURL(file)
    setPreview(url)
    upload(file)
  }, [upload])

  const onPaste = useCallback((e: React.ClipboardEvent) => {
    const item = Array.from(e.clipboardData.items).find(i => i.type.startsWith('image/'))
    if (item) {
      const file = item.getAsFile()
      if (file) onFile(file)
    }
  }, [onFile])

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) onFile(file)
  }, [onFile])

  return (
    <div
      className={`border-2 border-dashed rounded-xl p-4 cursor-pointer transition-all
        ${status === 'done' ? 'border-green-400 bg-green-50' : 'border-gray-300 hover:border-blue-400 bg-gray-50'}`}
      onClick={() => inputRef.current?.click()}
      onPaste={onPaste}
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && inputRef.current?.click()}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => { const f = e.target.files?.[0]; if (f) onFile(f) }}
      />
      {preview ? (
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={preview} alt={label} className="w-full h-48 object-cover rounded-lg" />
          <div className={`absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-full
            ${status === 'done' ? 'bg-green-500 text-white' : status === 'uploading' ? 'bg-yellow-400 text-black' : 'bg-red-500 text-white'}`}>
            {status === 'done' ? '✓ Salvo' : status === 'uploading' ? 'Salvando...' : 'Erro'}
          </div>
        </div>
      ) : (
        <div className="h-48 flex flex-col items-center justify-center text-gray-400 gap-2">
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 16l4-4 4 4 4-6 4 6M3 3h18v18H3z" strokeLinejoin="round"/>
          </svg>
          <span className="text-sm text-center font-medium">
            Cole (Ctrl+V), arraste ou clique
          </span>
        </div>
      )}
      <p className="text-center text-xs mt-3 font-semibold text-gray-600">{label}</p>
      <p className="text-center text-xs text-gray-400 mt-0.5">→ salva como <code>{slotKey}.jpg</code></p>
    </div>
  )
}

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Upload de Fotos</h1>
        <p className="text-gray-500 mb-8 text-sm">
          Copie cada imagem do chat e cole no quadrado correspondente (Ctrl+V com o quadrado focado), ou clique para escolher o arquivo.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {SLOTS.map((s) => (
            <ImageSlot key={s.key} slotKey={s.key} label={s.label} />
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-8">
          Página temporária — remova depois do upload
        </p>
      </div>
    </div>
  )
}
