import {upholdBot} from "../src/bot";
import "regenerator-runtime";
beforeEach(()=>{
    jest.useFakeTimers();
});
afterEach(() => {
    jest.useRealTimers()
})
test("bot test",async ()=>{
    const PAIR = "USD-EUR";
    upholdBot({
        fetchInterval: 500,
    priceForPair:()=> ({ pair: "USD-EUR", retriever: () => 0.5}),
    currencyPairs:["USD-EUR"],
        forPair: ({pair,retriever}) => {
            expect(pair).toStrictEqual(PAIR)
            expect(retriever()).toStrictEqual(0.5)
            jest.clearAllTimers();
        },
    })
    jest.runAllTimers();
})