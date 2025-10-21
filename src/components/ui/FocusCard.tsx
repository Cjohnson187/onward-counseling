import {Component, type JSX, type ReactNode} from "react";

export default class FocusCard extends Component<{ icon: JSX.ElementType, title: ReactNode, description: ReactNode }> {
    render() {
        let {icon: Icon, title, description} = this.props;
        return (
            <div
                className="bg-[#F3F3F3] p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-[#C87E5A]">
                <Icon className="w-10 h-10 text-[#C87E5A] mx-auto mb-4"/>
                <h3 className="text-2xl font-semibold text-[#1D4A47] mb-3">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        );
    }
}