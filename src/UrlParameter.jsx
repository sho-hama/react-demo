import {useLocation, useParams} from "react-router-dom";

export const UrlParameter = () => {
    const { id } = useParams()
    const {search} = useLocation();
    const query = new URLSearchParams(search)
    console.log(query)
    return (
        <div>
            <h1>UrlParameterページ</h1>
            <p>{id}</p>
            <p>{query.get("name")}</p>
        </div>
    )
}
