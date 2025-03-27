package com.backend.react_sts2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.react_sts2.service.MemberService;
import com.backend.react_sts2.vo.MemberVo;

@CrossOrigin  // cors 어노테이션을 붙여주세요.
@RestController
@RequestMapping("/")
public class MemberController {

    @Autowired
    private MemberService memberService;

    @RequestMapping(value = "/home")
    public String index(Model model) {

        List<MemberVo> memberList = memberService.getAllMember();
        System.out.println("size: " + memberList.size());

        model.addAttribute("memberList", memberList);
        return "home";
    }
    @RequestMapping(value = "/test")
    public List<MemberVo> test(Model model) {
        List<MemberVo> memberList = memberService.getAllMember();
        return memberList;
    }

}