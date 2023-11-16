import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { IMG_BASE_URL } from '../Components/Movie';

export default function MovieDetail() {
  const { title } = useParams();

  //네비게이트 훅을 통해 페이지 이동 시에 넘겨 받은 정보
  //이미지, 별점 등의 모든 정보들
  const { state } = useLocation();
  console.log(title);
  console.log(state);

  return (
    <div className="page-container">
      <div style={{display: 'flex'}}>
        <img style={{width: '300px', height: '450px'}} src={IMG_BASE_URL + state.poster_path} alt='영화 포스터 이미지' />
        <div>
          <div style={{ fontSize: "32px" }}>{title}</div>
        </div>
      </div>
    </div>
  );
}
