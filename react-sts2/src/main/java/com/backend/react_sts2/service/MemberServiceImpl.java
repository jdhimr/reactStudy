package com.backend.react_sts2.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.react_sts2.repository.MemberRepository;
import com.backend.react_sts2.vo.MemberVo;

@Service
public class MemberServiceImpl implements MemberService{

    @Autowired
    private MemberRepository memberRepository;

    @Override
    public List<MemberVo> getAllMember(){
        return memberRepository.getAllMember();
    }
}
