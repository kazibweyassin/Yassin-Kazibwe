'use client'

import { Linkedin, Twitter, Facebook, Share2, Copy, Check } from 'lucide-react'
import { useState } from 'react'

interface SocialShareProps {
  url: string
  title: string
  description?: string
}

export default function SocialShare({ url, title, description }: SocialShareProps) {
  const [copied, setCopied] = useState(false)
  const fullUrl = typeof window !== 'undefined' ? window.location.origin + url : url
  const shareText = description || title

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(shareText)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && 'share' in navigator && navigator.share) {
      try {
        await navigator.share({
          title,
          text: shareText,
          url: fullUrl,
        })
      } catch (err) {
        // User cancelled or error occurred
      }
    }
  }

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Share:</span>
      
      {typeof navigator !== 'undefined' && 'share' in navigator && (
        <button
          onClick={handleNativeShare}
          className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
          aria-label="Share"
        >
          <Share2 className="w-5 h-5" />
        </button>
      )}

      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>

      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-5 h-5" />
      </a>

      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
        aria-label="Share on Facebook"
      >
        <Facebook className="w-5 h-5" />
      </a>

      <button
        onClick={handleCopy}
        className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
        aria-label="Copy link"
      >
        {copied ? (
          <Check className="w-5 h-5 text-green-600" />
        ) : (
          <Copy className="w-5 h-5" />
        )}
      </button>
    </div>
  )
}
