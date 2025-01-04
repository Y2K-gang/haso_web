import React, { useState } from "react";
import { ProductData } from "@/type/product";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Category from "@/components/categorySelect";

interface ProductFormProps {
  initialData?: ProductData; // 수정 시 초기 데이터
  onSubmit: (data: ProductData) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ initialData, onSubmit }) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [images, setImages] = useState<File[]>([]);
  const [quantity, setQuantity] = useState(initialData?.quantity);
  const [unitPrice, setUnitPrice] = useState(initialData?.unitPrice);
  const [description, setDescription] = useState(initialData?.description || "");
  const [location1, setLocation1] = useState("");
  const [location2, setLocation2] = useState("");
  const [location3, setLocation3] = useState("");
  const [location, setLocation] = useState(initialData?.location || "");
  const [location2Options, setLocation2Options] = useState<string[]>([]); // location2 옵션을 관리
  const [category, setCategory] = useState(initialData?.category || "어류");
  const [ownerId, setOwnerId] = useState(initialData?.ownerId || "");

  const navigate = useNavigate();

  // location1, 2, 3 합치기
  const updateLocation = () => {
    setLocation(`${location1} ${location2} ${location3}`.trim());
  };

  // location1이 바뀔 때 location2 옵션 변경
  const handleLocation1Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocation1 = e.target.value;
    setLocation1(newLocation1);

    // location1에 따라 location2 달라짐
    if (newLocation1 === "서울특별시") {
      setLocation2Options(["중구", "서초구", "강남구"]);
    } else if (newLocation1 === "대구광역시") {
      setLocation2Options(["수성구", "중구", "동구"]);
    } else {
      setLocation2Options([]); // 다른 값은 location2 옵션 비우기
    }

    setLocation2("");
    updateLocation();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData: ProductData = {
      title,
      images,
      quantity,
      unitPrice,
      description,
      location,
      category,
      ownerId,
    };
    onSubmit(formData);
  };

  const handleGoBack = () => {
    navigate(-1); // 뒤로가기
  };

  return (
    <S.AllWriteArea onSubmit={handleSubmit}>
      <S.TopArea>
        <div>
          <S.FileInput
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <div>
          <div>
            <S.Ps>제목</S.Ps>
            <S.Inputs
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="계시물의 제목을 입력해주세요"
              required
            />
          </div>
          <S.MiddleOfTopArea>
            <div>
              <S.Ps>단가</S.Ps>
              <S.PriceInput
                type="number"
                value={unitPrice}
                onChange={(e) => setUnitPrice(Number(e.target.value))}
                placeholder="단가를 입력해주세요"
                required
              />
            </div>
            <div>
              <S.Ps>수량</S.Ps>
              <S.QuantityInput
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min={1}
                placeholder="수량을 입력해주세요"
                required
              />
            </div>
          </S.MiddleOfTopArea>
          <div>
            <S.Ps>어종</S.Ps>
            <div>
              <div>
                <Category />
              </div>
            </div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="패류">패류</option>
              <option value="어류">어류</option>
              <option value="해조류">해조류</option>
              <option value="두족류">두족류</option>
              <option value="갑각류">갑각류</option>
              <option value="기타">기타</option>
            </select>
          </div>
        </div>
      </S.TopArea>
      <S.MiddleArea>
        <S.Ps>장소</S.Ps>
        <div>
          <select
            value={location1}
            onChange={handleLocation1Change} // location1 변경 시 호출
          >
            <option value="0">시</option>
            <option value="서울특별시">서울특별시</option>
            <option value="대구광역시">대구광역시</option>
          </select>
          <select
            value={location2}
            onChange={(e) => {
              setLocation2(e.target.value);
              updateLocation();
            }}
          >
            <option value="0">군</option>
            {location2Options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <input
            value={location3}
            onChange={(e) => {
              setLocation3(e.target.value);
              updateLocation();
            }}
            placeholder="상세 장소를 입력해주세요"
            required
          />
        </div>
      </S.MiddleArea>
      <div>
        <S.Ps>상세설명</S.Ps>
        <S.DetailInfo
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <S.BottomArea>
        <button type="submit">등록</button>
        <button onClick={handleGoBack}>취소</button>
      </S.BottomArea>
    </S.AllWriteArea>
  );
};

export default ProductForm;
