import { BasePagination } from '../classes';

export class ParamsHelper {

    public static ObtemParametros<T>(Entidade: BasePagination<T>): URLSearchParams {
        let params: URLSearchParams = new URLSearchParams();
        let filterProperties = Object.keys(Entidade.filterOptions);

        filterProperties.forEach(Property => {
            params.append(Property, Entidade.filterOptions[Property]);
        });

        if (Entidade.skip)
            params.append("skip", Entidade.skip.toString());

        if (Entidade.take)
            params.append("take", Entidade.take.toString());

        return params;
    }

}