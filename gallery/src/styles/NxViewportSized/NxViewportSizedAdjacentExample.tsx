/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxTableHead, NxTableRow, NxTableCell, NxTableBody, NxBackButton }
  from '@sonatype/react-shared-components';

import './NxViewportSizedAdjacentExample.scss';

export default function NxViewportSizedScrollableExample() {
  return (
    <main className="nx-page-main nx-viewport-sized">
      <NxBackButton targetPageTitle="nx-viewport-sized Docs" href="#/pages/nx-viewport-sized"/>
      <div className="nx-page-title">
        <h1 className="nx-h1">A List and an Adjacent Tile</h1>
        <div className="nx-page-title__description">
          The tile contains a table which scrolls, and at the same time the list next to it scrolls. Both are
          sized based on the viewport, and other content (this header) appears above both.
        </div>
      </div>
      <div className="nx-viewport-sized__container nx-viewport-sized__container--adjacent">
        <ul className="nx-list nx-list--clickable nx-scrollable nx-viewport-sized__scrollable gallery-viewport-list">
          <li className="nx-list__item selected">
            <span className="nx-list__text">English</span>
          </li>
          <li className="nx-list__item">
            <span className="nx-list__text">Spanish</span>
          </li>
          <li className="nx-list__item">
            <span className="nx-list__text">French</span>
          </li>
          <li className="nx-list__item">
            <span className="nx-list__text">German</span>
          </li>
          <li className="nx-list__item">
            <span className="nx-list__text">Portuguese</span>
          </li>
          <li className="nx-list__item">
            <span className="nx-list__text">Italian</span>
          </li>
          <li className="nx-list__item">
            <span className="nx-list__text">Czech</span>
          </li>
          <li className="nx-list__item">
            <span className="nx-list__text">Greek</span>
          </li>
          <li className="nx-list__item">
            <span className="nx-list__text">Polish</span>
          </li>
          <li className="nx-list__item">
            <span className="nx-list__text">Ukranian</span>
          </li>
          <li className="nx-list__item">
            <span className="nx-list__text">Russian</span>
          </li>
          <li className="nx-list__item">
            <span className="nx-list__text">Mandarin</span>
          </li>
          <li className="nx-list__item">
            <span className="nx-list__text">Japanese</span>
          </li>
          <li className="nx-list__item">
            <span className="nx-list__text">Vietnamese</span>
          </li>
        </ul>
        <section className="nx-tile nx-viewport-sized__container">
          <header className="nx-tile-header">
            <div className="nx-tile-header__title">
              <h2 className="nx-h2">People and Places</h2>
            </div>
          </header>
          <div className="nx-tile-content nx-viewport-sized__container">
            <div className="nx-scrollable nx-table-container nx-viewport-sized__scrollable">
              <NxTable>
                <NxTableHead>
                  <NxTableRow>
                    <NxTableCell>Oct</NxTableCell>
                    <NxTableCell>Dev</NxTableCell>
                    <NxTableCell>Hex</NxTableCell>
                    <NxTableCell>Char</NxTableCell>
                  </NxTableRow>
                </NxTableHead>
                <NxTableBody>
                  <NxTableRow>
                    <NxTableCell>040</NxTableCell>
                    <NxTableCell>32</NxTableCell>
                    <NxTableCell>20</NxTableCell>
                    <NxTableCell>(space)</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>041</NxTableCell>
                    <NxTableCell>33</NxTableCell>
                    <NxTableCell>21</NxTableCell>
                    <NxTableCell>!</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>042</NxTableCell>
                    <NxTableCell>34</NxTableCell>
                    <NxTableCell>22</NxTableCell>
                    <NxTableCell>{'"'}</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>043</NxTableCell>
                    <NxTableCell>35</NxTableCell>
                    <NxTableCell>23</NxTableCell>
                    <NxTableCell>#</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>044</NxTableCell>
                    <NxTableCell>36</NxTableCell>
                    <NxTableCell>24</NxTableCell>
                    <NxTableCell>$</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>045</NxTableCell>
                    <NxTableCell>37</NxTableCell>
                    <NxTableCell>25</NxTableCell>
                    <NxTableCell>%</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>046</NxTableCell>
                    <NxTableCell>38</NxTableCell>
                    <NxTableCell>26</NxTableCell>
                    <NxTableCell>{'&'}</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>047</NxTableCell>
                    <NxTableCell>39</NxTableCell>
                    <NxTableCell>27</NxTableCell>
                    <NxTableCell>'</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>050</NxTableCell>
                    <NxTableCell>40</NxTableCell>
                    <NxTableCell>28</NxTableCell>
                    <NxTableCell>(</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>051</NxTableCell>
                    <NxTableCell>41</NxTableCell>
                    <NxTableCell>29</NxTableCell>
                    <NxTableCell>)</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>052</NxTableCell>
                    <NxTableCell>42</NxTableCell>
                    <NxTableCell>2A</NxTableCell>
                    <NxTableCell>*</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>053</NxTableCell>
                    <NxTableCell>43</NxTableCell>
                    <NxTableCell>2B</NxTableCell>
                    <NxTableCell>+</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>054</NxTableCell>
                    <NxTableCell>44</NxTableCell>
                    <NxTableCell>2C</NxTableCell>
                    <NxTableCell>,</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>055</NxTableCell>
                    <NxTableCell>45</NxTableCell>
                    <NxTableCell>2D</NxTableCell>
                    <NxTableCell>-</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>056</NxTableCell>
                    <NxTableCell>46</NxTableCell>
                    <NxTableCell>2E</NxTableCell>
                    <NxTableCell>.</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>057</NxTableCell>
                    <NxTableCell>47</NxTableCell>
                    <NxTableCell>2F</NxTableCell>
                    <NxTableCell>/</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>060</NxTableCell>
                    <NxTableCell>48</NxTableCell>
                    <NxTableCell>30</NxTableCell>
                    <NxTableCell>0</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>061</NxTableCell>
                    <NxTableCell>49</NxTableCell>
                    <NxTableCell>31</NxTableCell>
                    <NxTableCell>1</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>062</NxTableCell>
                    <NxTableCell>50</NxTableCell>
                    <NxTableCell>32</NxTableCell>
                    <NxTableCell>2</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>063</NxTableCell>
                    <NxTableCell>51</NxTableCell>
                    <NxTableCell>33</NxTableCell>
                    <NxTableCell>3</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>064</NxTableCell>
                    <NxTableCell>52</NxTableCell>
                    <NxTableCell>34</NxTableCell>
                    <NxTableCell>4</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>065</NxTableCell>
                    <NxTableCell>53</NxTableCell>
                    <NxTableCell>35</NxTableCell>
                    <NxTableCell>5</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>066</NxTableCell>
                    <NxTableCell>54</NxTableCell>
                    <NxTableCell>36</NxTableCell>
                    <NxTableCell>6</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>067</NxTableCell>
                    <NxTableCell>55</NxTableCell>
                    <NxTableCell>37</NxTableCell>
                    <NxTableCell>7</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>070</NxTableCell>
                    <NxTableCell>56</NxTableCell>
                    <NxTableCell>38</NxTableCell>
                    <NxTableCell>8</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>071</NxTableCell>
                    <NxTableCell>57</NxTableCell>
                    <NxTableCell>39</NxTableCell>
                    <NxTableCell>9</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>072</NxTableCell>
                    <NxTableCell>58</NxTableCell>
                    <NxTableCell>3A</NxTableCell>
                    <NxTableCell>:</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>073</NxTableCell>
                    <NxTableCell>59</NxTableCell>
                    <NxTableCell>3B</NxTableCell>
                    <NxTableCell>;</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>074</NxTableCell>
                    <NxTableCell>60</NxTableCell>
                    <NxTableCell>3C</NxTableCell>
                    <NxTableCell>&lt;</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>075</NxTableCell>
                    <NxTableCell>61</NxTableCell>
                    <NxTableCell>3D</NxTableCell>
                    <NxTableCell>=</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>076</NxTableCell>
                    <NxTableCell>62</NxTableCell>
                    <NxTableCell>3E</NxTableCell>
                    <NxTableCell>&gt;</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>077</NxTableCell>
                    <NxTableCell>63</NxTableCell>
                    <NxTableCell>3F</NxTableCell>
                    <NxTableCell>?</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>100</NxTableCell>
                    <NxTableCell>64</NxTableCell>
                    <NxTableCell>40</NxTableCell>
                    <NxTableCell>@</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>101</NxTableCell>
                    <NxTableCell>65</NxTableCell>
                    <NxTableCell>41</NxTableCell>
                    <NxTableCell>A</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>102</NxTableCell>
                    <NxTableCell>66</NxTableCell>
                    <NxTableCell>42</NxTableCell>
                    <NxTableCell>B</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>103</NxTableCell>
                    <NxTableCell>67</NxTableCell>
                    <NxTableCell>43</NxTableCell>
                    <NxTableCell>C</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>104</NxTableCell>
                    <NxTableCell>68</NxTableCell>
                    <NxTableCell>44</NxTableCell>
                    <NxTableCell>D</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>105</NxTableCell>
                    <NxTableCell>69</NxTableCell>
                    <NxTableCell>45</NxTableCell>
                    <NxTableCell>E</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>106</NxTableCell>
                    <NxTableCell>70</NxTableCell>
                    <NxTableCell>46</NxTableCell>
                    <NxTableCell>F</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>107</NxTableCell>
                    <NxTableCell>71</NxTableCell>
                    <NxTableCell>47</NxTableCell>
                    <NxTableCell>G</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>110</NxTableCell>
                    <NxTableCell>72</NxTableCell>
                    <NxTableCell>48</NxTableCell>
                    <NxTableCell>H</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>111</NxTableCell>
                    <NxTableCell>73</NxTableCell>
                    <NxTableCell>49</NxTableCell>
                    <NxTableCell>I</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>112</NxTableCell>
                    <NxTableCell>74</NxTableCell>
                    <NxTableCell>4A</NxTableCell>
                    <NxTableCell>J</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>113</NxTableCell>
                    <NxTableCell>75</NxTableCell>
                    <NxTableCell>4B</NxTableCell>
                    <NxTableCell>K</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>114</NxTableCell>
                    <NxTableCell>76</NxTableCell>
                    <NxTableCell>4C</NxTableCell>
                    <NxTableCell>L</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>115</NxTableCell>
                    <NxTableCell>77</NxTableCell>
                    <NxTableCell>4D</NxTableCell>
                    <NxTableCell>M</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>116</NxTableCell>
                    <NxTableCell>78</NxTableCell>
                    <NxTableCell>4E</NxTableCell>
                    <NxTableCell>N</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>117</NxTableCell>
                    <NxTableCell>79</NxTableCell>
                    <NxTableCell>4F</NxTableCell>
                    <NxTableCell>O</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>120</NxTableCell>
                    <NxTableCell>80</NxTableCell>
                    <NxTableCell>50</NxTableCell>
                    <NxTableCell>P</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>121</NxTableCell>
                    <NxTableCell>81</NxTableCell>
                    <NxTableCell>51</NxTableCell>
                    <NxTableCell>Q</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>122</NxTableCell>
                    <NxTableCell>82</NxTableCell>
                    <NxTableCell>52</NxTableCell>
                    <NxTableCell>R</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>123</NxTableCell>
                    <NxTableCell>83</NxTableCell>
                    <NxTableCell>53</NxTableCell>
                    <NxTableCell>S</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>124</NxTableCell>
                    <NxTableCell>84</NxTableCell>
                    <NxTableCell>54</NxTableCell>
                    <NxTableCell>T</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>125</NxTableCell>
                    <NxTableCell>85</NxTableCell>
                    <NxTableCell>55</NxTableCell>
                    <NxTableCell>U</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>126</NxTableCell>
                    <NxTableCell>86</NxTableCell>
                    <NxTableCell>56</NxTableCell>
                    <NxTableCell>V</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>127</NxTableCell>
                    <NxTableCell>87</NxTableCell>
                    <NxTableCell>57</NxTableCell>
                    <NxTableCell>W</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>130</NxTableCell>
                    <NxTableCell>88</NxTableCell>
                    <NxTableCell>58</NxTableCell>
                    <NxTableCell>X</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>131</NxTableCell>
                    <NxTableCell>89</NxTableCell>
                    <NxTableCell>59</NxTableCell>
                    <NxTableCell>Y</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>132</NxTableCell>
                    <NxTableCell>90</NxTableCell>
                    <NxTableCell>5A</NxTableCell>
                    <NxTableCell>Z</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>133</NxTableCell>
                    <NxTableCell>91</NxTableCell>
                    <NxTableCell>5B</NxTableCell>
                    <NxTableCell>[</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>134</NxTableCell>
                    <NxTableCell>92</NxTableCell>
                    <NxTableCell>5C</NxTableCell>
                    <NxTableCell>\</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>135</NxTableCell>
                    <NxTableCell>93</NxTableCell>
                    <NxTableCell>5D</NxTableCell>
                    <NxTableCell>]</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>136</NxTableCell>
                    <NxTableCell>94</NxTableCell>
                    <NxTableCell>5E</NxTableCell>
                    <NxTableCell>^</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>137</NxTableCell>
                    <NxTableCell>95</NxTableCell>
                    <NxTableCell>5F</NxTableCell>
                    <NxTableCell>_</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>140</NxTableCell>
                    <NxTableCell>96</NxTableCell>
                    <NxTableCell>60</NxTableCell>
                    <NxTableCell>`</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>141</NxTableCell>
                    <NxTableCell>97</NxTableCell>
                    <NxTableCell>61</NxTableCell>
                    <NxTableCell>a</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>142</NxTableCell>
                    <NxTableCell>98</NxTableCell>
                    <NxTableCell>62</NxTableCell>
                    <NxTableCell>b</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>143</NxTableCell>
                    <NxTableCell>99</NxTableCell>
                    <NxTableCell>63</NxTableCell>
                    <NxTableCell>c</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>144</NxTableCell>
                    <NxTableCell>100</NxTableCell>
                    <NxTableCell>64</NxTableCell>
                    <NxTableCell>d</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>145</NxTableCell>
                    <NxTableCell>101</NxTableCell>
                    <NxTableCell>65</NxTableCell>
                    <NxTableCell>e</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>146</NxTableCell>
                    <NxTableCell>102</NxTableCell>
                    <NxTableCell>66</NxTableCell>
                    <NxTableCell>f</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>147</NxTableCell>
                    <NxTableCell>103</NxTableCell>
                    <NxTableCell>67</NxTableCell>
                    <NxTableCell>g</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>150</NxTableCell>
                    <NxTableCell>104</NxTableCell>
                    <NxTableCell>68</NxTableCell>
                    <NxTableCell>h</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>151</NxTableCell>
                    <NxTableCell>105</NxTableCell>
                    <NxTableCell>69</NxTableCell>
                    <NxTableCell>i</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>152</NxTableCell>
                    <NxTableCell>106</NxTableCell>
                    <NxTableCell>6A</NxTableCell>
                    <NxTableCell>j</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>153</NxTableCell>
                    <NxTableCell>107</NxTableCell>
                    <NxTableCell>6B</NxTableCell>
                    <NxTableCell>k</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>154</NxTableCell>
                    <NxTableCell>108</NxTableCell>
                    <NxTableCell>6C</NxTableCell>
                    <NxTableCell>l</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>155</NxTableCell>
                    <NxTableCell>109</NxTableCell>
                    <NxTableCell>6D</NxTableCell>
                    <NxTableCell>m</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>156</NxTableCell>
                    <NxTableCell>110</NxTableCell>
                    <NxTableCell>6E</NxTableCell>
                    <NxTableCell>n</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>157</NxTableCell>
                    <NxTableCell>111</NxTableCell>
                    <NxTableCell>6F</NxTableCell>
                    <NxTableCell>o</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>160</NxTableCell>
                    <NxTableCell>112</NxTableCell>
                    <NxTableCell>70</NxTableCell>
                    <NxTableCell>p</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>161</NxTableCell>
                    <NxTableCell>113</NxTableCell>
                    <NxTableCell>71</NxTableCell>
                    <NxTableCell>q</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>162</NxTableCell>
                    <NxTableCell>114</NxTableCell>
                    <NxTableCell>72</NxTableCell>
                    <NxTableCell>r</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>163</NxTableCell>
                    <NxTableCell>115</NxTableCell>
                    <NxTableCell>73</NxTableCell>
                    <NxTableCell>s</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>164</NxTableCell>
                    <NxTableCell>116</NxTableCell>
                    <NxTableCell>74</NxTableCell>
                    <NxTableCell>t</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>165</NxTableCell>
                    <NxTableCell>117</NxTableCell>
                    <NxTableCell>75</NxTableCell>
                    <NxTableCell>u</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>166</NxTableCell>
                    <NxTableCell>118</NxTableCell>
                    <NxTableCell>76</NxTableCell>
                    <NxTableCell>v</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>167</NxTableCell>
                    <NxTableCell>119</NxTableCell>
                    <NxTableCell>77</NxTableCell>
                    <NxTableCell>w</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>170</NxTableCell>
                    <NxTableCell>120</NxTableCell>
                    <NxTableCell>78</NxTableCell>
                    <NxTableCell>x</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>171</NxTableCell>
                    <NxTableCell>121</NxTableCell>
                    <NxTableCell>79</NxTableCell>
                    <NxTableCell>y</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>172</NxTableCell>
                    <NxTableCell>122</NxTableCell>
                    <NxTableCell>7A</NxTableCell>
                    <NxTableCell>z</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>173</NxTableCell>
                    <NxTableCell>123</NxTableCell>
                    <NxTableCell>7B</NxTableCell>
                    <NxTableCell>{'{'}</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>174</NxTableCell>
                    <NxTableCell>124</NxTableCell>
                    <NxTableCell>7C</NxTableCell>
                    <NxTableCell>|</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>175</NxTableCell>
                    <NxTableCell>125</NxTableCell>
                    <NxTableCell>7D</NxTableCell>
                    <NxTableCell>{'}'}</NxTableCell>
                  </NxTableRow>
                  <NxTableRow>
                    <NxTableCell>176</NxTableCell>
                    <NxTableCell>126</NxTableCell>
                    <NxTableCell>7F</NxTableCell>
                    <NxTableCell>~</NxTableCell>
                  </NxTableRow>
                </NxTableBody>
              </NxTable>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}