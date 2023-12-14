'use client';
import React from 'react';
import { UploadDropzone } from '@/lib/uploadthing';
import '@uploadthing/react/styles.css';
import { X } from 'lucide-react';
import Image from 'next/image';
interface FileUploadProps {
    endPoint: 'messageFile' | 'serverImage';
    value: string;
    onChange: (url?: string) => void;
}
export const FileUpload: React.FC<FileUploadProps> = ({ endPoint, value, onChange }) => {
    const fileType = value?.split('.').pop();
    if (value && fileType !== 'pdf') {
        return (
            <div className='h-20 w-20 relative'>
                <Image fill alt='upload' src={value} className='rounded-full object-center object-cover' />
                <button className='bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm' onClick={() => onChange('')}>
                    <X className='h-4 w-4' />
                </button>
            </div>
        );
    }
    return (
        <UploadDropzone
            endpoint={endPoint}
            onClientUploadComplete={(res) => {
                onChange(res?.[0]?.url);
            }}
            onUploadError={(error: Error) => {
                console.log({ error });
            }}
        />
    );
};
