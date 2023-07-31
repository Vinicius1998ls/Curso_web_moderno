import Layout from "@/components/Layout";

export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function estatico(props) {
    return(
        <Layout titulo="Conteúdo estático">
            <div>{props.numero}</div>
        </Layout>
    )
}