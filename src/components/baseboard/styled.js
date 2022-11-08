import styled from "styled-components";

export const StyledBaseBoard = styled.div`
    h2 {
        font-size: 16px;
        margin-bottom: 16px;
        text-transform: capitalize;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;

        section {
            padding: 16px;
            display: flex;
            
            div {
                margin-right: 24px;
                display: flex;
            }
        }
    
        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    }
`;
