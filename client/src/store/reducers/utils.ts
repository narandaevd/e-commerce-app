import Redux from 'redux';
namespace Utils {
    type Reducer = (state: any, action: Redux.Action) => object; 
    type MapStateToProps<S> = (state: any) => S;
    type MapDispatchToProps<D> = (dispatch: Redux.Dispatch<Redux.Action<any>>) => D;
    export interface ReducerWrap<S, D> {
        reducer: Reducer,
        mapStateToProps: MapStateToProps<S>,
        mapDispatchToProps: MapDispatchToProps<D>,
    }
}
export default Utils;