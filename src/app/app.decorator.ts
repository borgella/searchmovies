
export function MyDecorator(annoations: any) {
    return function (target: Function) {
        let parentTarget = Object.getPrototypeOf(target.prototype).constructor;
        let parentAnnotations = [], parentParamTypes = [], parentPropMetadata = [], parentParameters = [];
        parentAnnotations.push(Reflect.getOwnPropertyDescriptor('annotations', parentTarget));
        parentParamTypes.push(Reflect.getOwnPropertyDescriptor('design:paramtypes', parentTarget));
        parentPropMetadata.push(Reflect.getOwnPropertyDescriptor('propMetadata', parentTarget));
        parentParameters.push(Reflect.getOwnPropertyDescriptor('parameters', parentTarget));
    };

}