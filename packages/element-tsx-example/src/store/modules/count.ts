import { VuexModule, Mutation, getModule, Action, Module } from 'vuex-module-decorators';
import store from '@/store';
export interface ICountState {
    count: number;
    loading: boolean;
}

@Module({ dynamic: true, name: 'count', store, })
class Count extends VuexModule implements ICountState {
    // state
    count = 0
    loading = false;

    // getter
    get countPlus1() {
        return this.count + 1;
    }

    @Mutation
    increment(delta = 1) {
        this.count += delta
    }
    @Mutation
    decrement(delta = 1) {
        this.count -= delta
    }
    @Mutation
    LOADING(loading = true) {
        this.loading = loading;
    }

    @Action
    add(delta = 1) {
        this.LOADING()
        setTimeout(() => {
            this.LOADING(false);
            this.increment(delta)
        }, 1000)
    }
    // 带commit需要return值
    @Action({ commit: 'decrement' })
    async subtract(delta = 1) {
        this.LOADING()
        const promise = new Promise<number>((resolve) => {
            setTimeout(() => {
                resolve(delta)
            }, 1000)
        })
        const result = await promise;
        this.LOADING(false);
        return result;
    }
}
export const countModule = getModule(Count)