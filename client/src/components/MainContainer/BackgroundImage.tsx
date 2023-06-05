import styles from "@/components/MainContainer/BackgroundImage.module.css";
import Image, {StaticImageData} from "next/image";

interface Props {
    image: StaticImageData
}
export default function BackgroundImage({image}: Props){

    return(
        <div className={styles.backgroundImage}>
            <Image
                src={image}
                alt={'NASA Pillars of Creation'}
                quality={100}
                fill
                sizes={'100%'}
                style={{
                    objectFit: 'cover'
                }}/>
        </div>
    )
}