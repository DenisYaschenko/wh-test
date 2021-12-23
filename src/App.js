import React from "react";
import Breadcrumbs from "./components/breadcrumb/breadcrumb";
import styled from "styled-components";
import StyledTag from "./components/styledTag/styledTag";

const Wrapper = styled.div`
  padding: 1rem;
`;

const Hr = styled.hr`
  margin: 30px 0;
`;

const Title = styled.h1`
  margin-top: 30px;
  font-style: italic;
`;

const App = () => {
    const styledBreadCrumbs = [
        {
            path: "Settings",
            styles: {
                color: "green",
                fontSize: "18px",
            },
            onClick: () => console.log("Settings click"),
        },
        {
            path: "Company settings",
            styles: {
                color: "blue",
                fontSize: "10px",
            },
        },
        {
            path: "Project settings",
            styles: {
                color: "orange",
                fontSize: "18px",
            },
            onClick: () => console.log("Project settings click"),
        },
        {
            path: "4th path is here",
        },
    ];

    const goBack = () => console.log("callback");

    return (
        <Wrapper>
            <Title>Default</Title>
            <StyledTag/>
            <Hr/>
            <Title>Bordered</Title>
            <StyledTag bordered/>
            <Hr/>
            <Title>Bordered and bold</Title>
            <StyledTag bold bordered/>
            <Hr/>
            <Title>Custom tag</Title>
            <StyledTag
                style={{
                    color: "green",
                    fontSize: "18px",
                    padding: "10px",
                    background: "lightgreen",
                    border: "1px solid green",
                }}
            />
            <Hr/>
            <Title>Breadcrumbs with styles and callbacks</Title>
            <Hr/>
            <Breadcrumbs breadCrumbs={[...styledBreadCrumbs].slice(0, 1)}/>
            <Hr/>
            <Breadcrumbs
                showArrow
                breadCrumbs={[...styledBreadCrumbs].slice(0, 1)}
                onBack={goBack}
            />
            <Hr/>
            <Breadcrumbs
                showArrow
                breadCrumbs={[...styledBreadCrumbs].slice(0, 2)}
                onBack={goBack}
            />
            <Hr/>

            <Breadcrumbs
                showArrow
                breadCrumbs={[...styledBreadCrumbs].slice(0, 3)}
                onBack={goBack}
            />
            <Hr/>
            <Breadcrumbs
                showArrow
                breadCrumbs={[...styledBreadCrumbs]}
                onBack={goBack}
            />
            <Title>Simple components without styles and callbacks</Title>
            <Hr/>
            <Breadcrumbs simpleBreadcrumbs={["Settings"]}/>
            <Hr/>
            <Breadcrumbs showArrow simpleBreadcrumbs={["Settings"]} onBack={goBack}/>
            <Hr/>
            <Breadcrumbs
                showArrow
                simpleBreadcrumbs={["Settings", "Company settings"]}
                onBack={goBack}
            />
            <Hr/>
            <Breadcrumbs
                showArrow
                simpleBreadcrumbs={["Settings", "Company settings", "Project settings"]}
                onBack={goBack}
            />
            <Hr/>
            <Breadcrumbs
                showArrow
                simpleBreadcrumbs={[
                    "Settings",
                    "Company settings",
                    "Project settings",
                    "4th path is here",
                ]}
                onBack={goBack}
            />
            <Hr/>
        </Wrapper>
    );
};

export default App;
