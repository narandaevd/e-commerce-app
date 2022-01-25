import Counter from './counter/counter.types';

namespace Main {
    export interface mapStateToProps extends Counter.mapStateToProps {
    }
    export interface mapDispatchToProps extends Counter.mapDispatchToProps {
    }
    export interface mapStoreToProps extends mapStateToProps, mapDispatchToProps {
    }
}

export default Main;