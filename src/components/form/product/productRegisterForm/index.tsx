import React, { useState } from "react";
import { ProductData } from "@/type/product.type";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import CategorySelector from "@/components/categorySelect";
import { cityData } from "@/data/cityData";

interface ProductFormProps {
  initialData?: ProductData; // 수정 시 초기 데이터
  onSubmit: (data: ProductData) => void;
}

const ProductForm = ({ initialData, onSubmit }: ProductFormProps) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [images, setImages] = useState<File[]>([]);
  const [quantity, setQuantity] = useState(initialData?.quantity);
  const [unitPrice, setUnitPrice] = useState(initialData?.unitPrice);
  const [description, setDescription] = useState(
    initialData?.description || ""
  );
  const [location1, setLocation1] = useState("");
  const [location2, setLocation2] = useState("");
  const [location3, setLocation3] = useState("");
  const [location, setLocation] = useState(initialData?.location || "");
  const [location2Options, setLocation2Options] = useState<string[]>([]); // location2 옵션을 관리
  const [category, setCategory] = useState(initialData?.category || "어류"); // 단일 상태로 카테고리 관리
  const [ownerId, setOwnerId] = useState(initialData?.ownerId || "");
  const categories = ["패류", "어류", "해조류", "두족류", "갑각류", "기타"];
  const navigate = useNavigate();

  // location1, 2, 3 합치기
  const updateLocation = () => {
    setLocation(`${location1} ${location2} ${location3}`.trim());
  };

  // location1이 바뀔 때 location2 옵션 변경
  const handleLocation1Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocation1 = e.target.value;
    setLocation1(newLocation1);

    // 해당 도시의 구/군 목록을 가져오기
    const selectedCity = cityData.find((city) => city.city === newLocation1);
    if (selectedCity) {
      setLocation2Options(selectedCity.districts);
    } else {
      setLocation2Options([]);
    }

    setLocation2(""); // 선택 초기화
    updateLocation(); // location 업데이트
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const triggerFileInput = () => {
    document.getElementById("file-input")?.click(); // 숨겨진 input을 클릭하도록 유도
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
      category, // 수정된 category 상태 사용
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
        <S.DivInRegisterForm>
        <S.FileInputWrapper onClick={triggerFileInput}>
          {images.length > 0 ? (
            <p>{images.length}개의 파일이 선택되었습니다</p>
          ) : (
            ""
          )}
          <S.FileInput
            type="file"
            id="file-input" // input component로 변경하기
            multiple
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </S.FileInputWrapper>
        </S.DivInRegisterForm>
        <S.RightTopArea>
          <S.DivInRegisterForm>
            <S.Ps>제목</S.Ps>
            <S.Inputs
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="계시물의 제목을 입력해주세요"
              required
            />
          </S.DivInRegisterForm>
          <S.MiddleOfTopArea>
            <S.DivInRegisterForm>
              <S.Ps>단가</S.Ps>
              <S.PriceInput
                type="number"
                value={unitPrice}
                onChange={(e) => setUnitPrice(Number(e.target.value))}
                placeholder="단가를 입력해주세요"
                required
              />
            </S.DivInRegisterForm>
            <S.DivInRegisterForm>
              <S.Ps>수량</S.Ps>
              <S.QuantityInput
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min={1}
                placeholder="수량을 입력해주세요"
                required
              />
            </S.DivInRegisterForm>
          </S.MiddleOfTopArea>
          <S.DivInRegisterForm>
            <S.Ps>어종</S.Ps>
            <S.SelectorsArea>
              {categories.map((categoryOption, index) => (
                <CategorySelector
                  key={index}
                  category={categoryOption}
                  isSelected={category === categoryOption} // 선택된 카테고리와 비교
                  onClick={() => setCategory(categoryOption)} // 카테고리 선택 시 업데이트
                />
              ))}
            </S.SelectorsArea>
          </S.DivInRegisterForm>
        </S.RightTopArea>
      </S.TopArea>
      <S.AllBottoms>
        <S.MiddleArea>
          <S.Ps>장소</S.Ps>
          <S.MiddleLocal>
            <S.Local
              value={location1}
              onChange={handleLocation1Change} // location1 변경 시 호출
            >
              <S.OptionInRegisterForm value="" disabled hidden>
                시
              </S.OptionInRegisterForm>
              {cityData.map((city) => (
                <S.OptionInRegisterForm key={city.city} value={city.city}>
                  {city.city}
                </S.OptionInRegisterForm>
              ))}
            </S.Local>

            <S.Local
              value={location2}
              onChange={(e) => {
                setLocation2(e.target.value);
                updateLocation();
              }}
            >
              <S.OptionInRegisterForm value="" disabled hidden>
                군
              </S.OptionInRegisterForm>
              {location2Options.map((option) => (
                <S.OptionInRegisterForm key={option} value={option}>
                  {option}
                </S.OptionInRegisterForm>
              ))}
            </S.Local>
            <S.Inputs
              value={location3}
              onChange={(e) => {
                setLocation3(e.target.value);
                updateLocation();
              }}
              placeholder="상세 장소를 입력해주세요"
              required
            />
          </S.MiddleLocal>
        </S.MiddleArea>
        <S.DivInRegisterForm>
          <S.Ps>상세설명</S.Ps>
          <S.DetailInfo
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </S.DivInRegisterForm>
        <S.ButtonArea>
            <S.SubmitBtn type="submit">등록</S.SubmitBtn>
            <S.CencelBtn onClick={handleGoBack}>취소</S.CencelBtn>
        </S.ButtonArea>
      </S.AllBottoms>
    </S.AllWriteArea>
  );
};

export default ProductForm;
