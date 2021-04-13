import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	background-color: #fff;
`
export const Banner = styled.Image`
	max-height: 400px;
	align-items: center;
	justify-content: center;
`
export const Label = styled.Text`
	font-size: 16px;
	font-weight: 800;
	margin: 8px;
`
export const LabelResult = styled(Label)`
	font-size: 24px;
	font-weight: 800;
	margin: 8px;
	align-self: center;
	color: #ff0000;
`
export const Input = styled.TextInput`
	font-size: 16px;
	font-weight: 400;
	margin: 8px;
	background-color: rgba(0, 100, 255, 0.2);
	border: solid 1px rgba(0, 100, 255, 1);
	border-radius: 8px;
	min-height: 40px;
	padding: 16px;
`
export const Button = styled.TouchableOpacity`
	font-size: 16px;
	font-weight: 400;
	margin: 8px;
	margin-top: 16px;
	background-color: rgba(0, 100, 255, 0.2);
	border: solid 1px rgba(0, 100, 255, 1);
	border-radius: 8px;
	min-height: 40px;
	padding: 16px;
`
export const LabelButton = styled(Label)`
	font-size: 12px;
	font-weight: 600;
	align-self: center;
	margin: 0;
`
