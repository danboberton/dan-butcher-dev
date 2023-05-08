import ContentCard from "@/pages/components/ContentCard/ContentCard";

export default function MainContent({}){

    const content : JSX.Element[] = [
        <><p className={"content-text responsive"}>Content 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam distinctio est ex minima mollitia necessitatibus numquam omnis perspiciatis quisquam. Ipsa iste, maiores maxime quia quos reiciendis sequi similique sunt vitae?</p></>,
        <><p className={"content-text responsive"}>Content 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam distinctio est ex minima mollitia necessitatibus numquam omnis perspiciatis quisquam. Ipsa iste, maiores maxime quia quos reiciendis sequi similique sunt vitae?</p></>,
        <><p className={"content-text responsive"}>Content 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam distinctio est ex minima mollitia necessitatibus numquam omnis perspiciatis quisquam. Ipsa iste, maiores maxime quia quos reiciendis sequi similique sunt vitae?</p></>,
    ]

    return(
        <div className={"content-frame"}>
            {content.map((value: JSX.Element, index: number):  JSX.Element =>{
                return (
                    <ContentCard index={index}>
                        {value}
                    </ContentCard>
                )
            })}
        </div>
    )
}