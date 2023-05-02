import ContentCard from "@/pages/components/ContentCard";

export default function MainContent({}){

    return(
        <div className={"content-frame"}>
            <ContentCard index={0}>
                <p className={"content-text responsive"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam distinctio est ex minima mollitia necessitatibus numquam omnis perspiciatis quisquam. Ipsa iste, maiores maxime quia quos reiciendis sequi similique sunt vitae?</p>
            </ContentCard>
        </div>
    )
}