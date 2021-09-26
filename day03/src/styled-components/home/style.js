import styled from "styled-components"
 const  Home = styled.div`
    color: red;
    font-size: 46px;
    .lbt {
        color: yellow;
        font-size: 25px;
        text-decoration: underline;
    }
`
 const Btn = styled.input.attrs({
    placeholder: "deng",
    bColor: "blue"
})`
    background-color: ${p => p.theme.color};
    color: ${p => p.color}
`
export {
    Home,
    Btn
}
