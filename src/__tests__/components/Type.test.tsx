import React from "react";
import { render } from "@testing-library/react-native";
import { Type } from "../../components/Type";

const types = [
    {
        name: "Grass",
    },
    {
        name: "Poison",
    },
];

describe("Type", () => {
    it("should render the component", () => {
        const { getByTestId } = render(<Type types={types} />);

        expect(getByTestId("type")).toBeTruthy();
    });
});
