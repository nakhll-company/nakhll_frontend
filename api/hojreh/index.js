import { ApiRegister } from "../../services/apiRegister/ApiRegister";
import { apiReference } from "../apiReference";

export const getSchemaList = async(id) => {
    let all_data_for_component = [];
    let all_type_for_component = [];
    let Schema = [];
    let Api_Shop = encodeURI(`${apiReference.shop}${id}/`);


    let response = await ApiRegister().apiRequest(
        null,
        "GET",
        Api_Shop,
        true,
        ""
    );

    if (response.status === 200) {
        if (response.data.is_landing) {
            Schema = await ApiRegister().apiRequest(
                null,
                "GET",
                `${apiReference.schemaShop}${response.data.ID}/`,
                true,
                ""
            );
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
            }
        }
        return {
            shop: response.data || [],
            SchemaIn: Schema.data || [],
            all_type_for_component,
            all_data_for_component,
        };
    } else {
        return {
            shop: response.data || [],
            SchemaIn: [],
            all_type_for_component,
            all_data_for_component,
        };
    }
};