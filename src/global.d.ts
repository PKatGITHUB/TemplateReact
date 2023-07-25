declare interface TodoProps {
	onclick: () => void;
	completed: Boolean;
	text: String;
}
declare interface TodoListProps {
	todos: {
		id: Number;
		completed: Boolean;
		text: String;
	}[];
	onTodoClick: (index: Number) => void;
}

declare module "*.jpg";
declare module "*.png";
declare module "*.gif";
declare module "*.less";
