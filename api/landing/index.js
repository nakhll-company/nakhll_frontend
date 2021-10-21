import { ApiRegister } from "../../services/apiRegister/ApiRegister";
import { apiReference } from "../apiReference";

export const getSchemaList = async() => {
    let all_data_for_component = [];
    let all_type_for_component = [];
    let urlSchema = encodeURI(apiReference.Landing_Page);

    let Schema = await ApiRegister().apiRequest(null, "GET", urlSchema, true, "");

    if (Schema.status === 200) {
        for (let index = 0; index < Schema.data.length; index++) {
            let one_Component = await ApiRegister().apiRequest(
                null,
                "GET",
                Schema.data[index].data,
                true,
                ""
            );
            if (one_Component.status === 200) {
                all_type_for_component.push(Schema.data[index].component_type);
                all_data_for_component.push(one_Component.data);
            }
        }

        return {
            SchemaIn: Schema.data,
            all_type_for_component,
            all_data_for_component,
        };
    } else {
        return null;
    }
};