import React from "react"
import { FaSearchLocation, FaSketch } from "react-icons/fa"
import { ImPen} from "react-icons/im"
import styled from "styled-components"

export default [
  {
    id: 1,
    icon: <ImPen className="service-icon" />,
    title: "Logo Design",
    text: `Your logo should be the main identification for you business and brand, you'll want people to instantly connect the sight of your logo with a vision of what your business or brand does for them.  `,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "Web Research, Design & Development",
    text: `Findings from the research and design phases are utilized for the production of specific products including materials, systems, and methods. I will engineer the solution utilizing the research and designs to produce awesome clean products for you and your brand.`,
  },
  {
    id: 3,
    icon: <FaSearchLocation className="service-icon" />,
    title: "SEO Optimization",
    text: `With the correct Search Engine Optimization (SEO) tatics, over time it can increase the quality and quantity of the traffic that comes to your digital platform, get you to the top of Google rankings and search.`,
  },
]
