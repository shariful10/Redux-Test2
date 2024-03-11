import Button from "./Button";
import {
	decrement,
	increment,
	decrementByValue,
	incrementByValue,
} from "../redux/features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
	const dispatch = useDispatch();
	const { count } = useSelector((state) => state.counter);

	return (
		<div className="border-2 border-cyan-300 rounded-2xl p-10 max-w-3xl mx-auto mt-10">
			<div className="flex flex-col justify-center items-center gap-5">
				<h2 className="text-xl font-medium text-blue-600 w-16 h-16 rounded-full border-2 border-cyan-300 flex flex-col items-center justify-center">
					{count}
				</h2>
				<div className="flex flex-col justify-center items-center gap-5">
					<div className="flex justify-center items-center gap-12">
						<Button
							onClick={() => dispatch(increment())}
							className="bg-teal-400 hover:bg-teal-600"
							btnText="Increment"
						/>
						<Button
							onClick={() => dispatch(decrement())}
							className="bg-red-400 hover:bg-red-600"
							btnText="Decrement"
						/>
					</div>
					<div className="flex justify-center items-center gap-5">
						<Button
							onClick={() => dispatch(incrementByValue(5))}
							className="bg-teal-400 hover:bg-teal-600"
							btnText="Increment by 5"
						/>
						<Button
							onClick={() => dispatch(decrementByValue(5))}
							className="bg-red-400 hover:bg-red-600"
							btnText="Decrement by 5"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Counter;
