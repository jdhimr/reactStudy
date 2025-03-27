package com.backend.react_sts2.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.backend.react_sts2.vo.MemberVo;

@Mapper
public interface MemberRepository {
    
        List<MemberVo> getAllMember();

}
