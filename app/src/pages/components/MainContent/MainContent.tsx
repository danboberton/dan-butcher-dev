import styles from "./MainContent.module.css"
import ContentCard from "@/pages/components/MainContent/ContentCard/ContentCard";
import About from "@/pages/components/MainContent/About";
import Skills from "@/pages/components/MainContent/Skills";
import Education from "@/pages/components/MainContent/Education";
import Experience from "@/pages/components/MainContent/Experience";
import Projects from "@/pages/components/MainContent/Projects";


export default function MainContent({}): JSX.Element {

    const content: JSX.Element[] = [
        <About/>,
        <Skills/>,
        <Education/>,
        <Experience/>,
        <Projects/>,
        <><p>Content 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquam distinctio est ex minima mollitia necessitatibus numquam omnis perspiciatis quisquam. Ipsa iste,
            maiores maxime quia quos reiciendis sequi similique sunt vitae?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi fugit nostrum optio placeat quasi
            repellat vel vitae. Rem sint, vero? Amet consequuntur ea esse hic laboriosam nemo officiis quae, tempora.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate molestias reprehenderit tempora!
            Aliquid, assumenda dolore et eum laborum molestias nisi numquam omnis provident ratione, rem repudiandae
            similique suscipit tenetur vitae.</p></>,
        <><p>Content 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquam distinctio est ex minima mollitia necessitatibus numquam omnis perspiciatis quisquam. Ipsa iste,
            maiores maxime quia quos reiciendis sequi similique sunt vitae?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium amet animi consectetur consequatur
            esse ex, expedita fugiat, ipsum iure minima nam nisi repellendus similique sit tempore ut voluptas
            voluptates?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos id ipsam iste labore rem? Accusamus
            architecto, cum deleniti dolorem earum exercitationem fugiat harum in nesciunt, obcaecati perferendis quasi
            voluptatum? Dolores.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit minima necessitatibus repellat soluta. Alias
            eos facilis nam sunt voluptas voluptatibus. Assumenda consequuntur cupiditate exercitationem nesciunt
            possimus saepe, sunt tempora voluptatem.</p></>,
        <><p>Content 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquam distinctio est ex minima mollitia necessitatibus numquam omnis perspiciatis quisquam. Ipsa iste,
            maiores maxime quia quos reiciendis sequi similique sunt vitae?</p></>,
        <><p>Content 4 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquam distinctio est ex minima mollitia necessitatibus numquam omnis perspiciatis quisquam. Ipsa iste,
            maiores maxime quia quos reiciendis sequi similique sunt vitae?</p></>,
    ]

    return (
        <div className={styles.mainContent}>
            {content.map((value: JSX.Element, index: number): JSX.Element => {
                return (
                    <ContentCard index={index +1} key={`content-${index}`}>
                        {value}
                    </ContentCard>
                )
            })}
        </div>
    )
}