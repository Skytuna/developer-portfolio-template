import Image from 'next/image';

export type ProfilePhotoProps = {
    profilePhotoPath: string;
};

export default function ProfilePhoto({ profilePhotoPath }: ProfilePhotoProps) {
    return (
        <Image
            src={profilePhotoPath}
            alt='Profile Photo'
            width={300}
            height={300}
            layout='intrinsic'
            className='rounded-xl'
        />
    );
}
