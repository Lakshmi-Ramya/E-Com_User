import styled from "styled-components";
import React from "react";

const Support = styled.div`
  font-size: 2rem;
  margin: 30px 0 20px;
  padding: 10px 20px;
  font-weight: normal;
`;
const Support1 = styled.div`
  display: flex;
  margin: 30px;
  width: calc(50% - 10px);
  justify-content: space-between;
  margin-bottom: 50px;
  background-color: #f8f8f8;
`;
const SupportBox = styled.div`
  display: flex;
`;
const Support1In = styled.div`
padding: 0px;
display: flex;
flex-wrap: wrap;
align-content: space-between;
flex: unset;
width: calc(50% - 10px);
`;
const SupportImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export default function FooterComponent() {
    return (
        <><Support>
            <span>Support</span>
            <hr class="border-bottom-line line-fadein-animate fadein" />
        </Support><SupportBox>
                <Support1>
                    <Support1In>
                        <div style={{ width: '100%', fontWeight: 400, boxSizing: 'border-box', display: 'block' }}>
                            <h1 style={{ padding: '10px' }}>Your personal helpdesk.</h1>
                        </div>
                        <div style={{ width: '100%', fontWeight: 400, boxSizing: 'border-box', display: 'block' }}>
                            <p style={{ width: '100%', fontWeight: 400, color: 'rgba(0, 0, 0, 0.96)', fontSize: '14px', padding: '10px' }}>From finding the perfect phone to quickly resolving queries, we're always ready to help.</p>
                            <a href="" style={{ width: '100%', fontWeight: 400, color: 'rgba(0, 0, 0, 0.96)', fontSize: '16px', padding: '10px' }}>Let’s chat</a>
                            <h1></h1>
                        </div>
                    </Support1In>
                    <Support1In>
                        <SupportImage src="https://www.oneplus.in/content/dam/oasis/page/2022/new-homepage/na/homepage/support/Helpdesk-PC.jpg.thumb.webp" />
                    </Support1In>
                </Support1>
                <Support1>
                    <Support1In>
                        <div style={{ width: '100%', fontWeight: 400, boxSizing: 'border-box', display: 'block' }}>
                            <h1 style={{ padding: '10px' }}>Our technical team is here to help</h1>
                        </div>
                        <div style={{ width: '100%', fontWeight: 400, boxSizing: 'border-box', display: 'block' }}>
                            <p style={{ width: '100%', fontWeight: 400, color: 'rgba(0, 0, 0, 0.96)', fontSize: '14px', padding: '10px' }}>We have over 250 authorized service centers across India. All the fully-trained OnePlus staff are at your service.</p>
                            <a href="" style={{ width: '100%', fontWeight: 400, color: 'rgba(0, 0, 0, 0.96)', fontSize: '16px', padding: '10px' }}>Find nearest service center</a>
                            <h1></h1>
                        </div>
                    </Support1In>
                    <Support1In>
                        <SupportImage src="https://www.oneplus.in/content/dam/oasis/page/2022/operation/sep/0906/homepage/Service-Center-desktop.jpg.thumb.webp" />
                    </Support1In>
                </Support1>
            </SupportBox></>
    );
}