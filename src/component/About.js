import { Collapsible, CollapsibleItem, Icon } from "react-materialize";

const About = () => {
    return (
        <Collapsible
            accordion
            popout
        >
            <CollapsibleItem
                expanded={false}
                header="About us"
                icon={<Icon>people</Icon>}
                node="div"
            >
                This is a list of the best and greatest movies of all time. Enjoy it.
            </CollapsibleItem>
            <CollapsibleItem
                expanded={false}
                header="Nations"
                icon={<Icon>location_on</Icon>}
                node="div"
            >
                Viet Nam
            </CollapsibleItem>
            <CollapsibleItem
                expanded={false}
                header="My Email"
                icon={<Icon>email</Icon>}
                node="div"
            >
                tuongnvse161049@fpt.edu.vn
            </CollapsibleItem>
        </Collapsible>
    )
}

export default About;