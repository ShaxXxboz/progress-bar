/**
 * @jest-environment jsdom
 */

import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import ProgressBar from "./ProgressBar";
import ProgressBarStep from "../ProgressBarStep";
import stepsData from "../../../stepsData";

configure({ adapter: new Adapter() });

describe("progress bar", () => {
  const wrapper = mount(<ProgressBar stepsData={stepsData} />);

  it("should show steps", () => {
    expect(wrapper.find(ProgressBarStep)).toHaveLength(stepsData.length);
  });

  it("should increment step counter when clicked", () => {
    wrapper.find(ProgressBarStep).at(1).simulate("click");
    expect(wrapper.find(ProgressBarStep).at(1).props().step.isCurrent).toEqual(
      true
    );
  });
});
